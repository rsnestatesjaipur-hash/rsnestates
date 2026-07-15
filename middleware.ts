import { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

// =====================================================
// Middleware
// =====================================================

export async function middleware(
  request: NextRequest
) {
  // =====================================================
  // Response
  // =====================================================

  let response = NextResponse.next({
    request,
  });

  // =====================================================
  // Supabase
  // =====================================================

  const supabase =
    createServerClient(
      process.env
        .NEXT_PUBLIC_SUPABASE_URL!,
      process.env
        .NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },

          setAll(cookiesToSet) {
            cookiesToSet.forEach(
              ({ name, value, options }) => {
                request.cookies.set(
                  name,
                  value
                );

                response.cookies.set(
                  name,
                  value,
                  options
                );
              }
            );
          },
        },
      }
    );

  // =====================================================
  // Current User
  // =====================================================

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // =====================================================
  // Route Information
  // =====================================================

  const pathname =
    request.nextUrl.pathname;

  const isPortal =
    pathname.startsWith("/portal");

  const isLoginPage =
    pathname === "/portal/login";

  const isRegisterPage =
    pathname === "/portal/register";

  const isPublicPortalPage =
    isLoginPage || isRegisterPage;

  // =====================================================
  // Non Portal Routes
  // =====================================================

  if (!isPortal) {
    return response;
  }

  // =====================================================
  // Guest Access
  // =====================================================

  if (!user) {
    if (isPublicPortalPage) {
      return response;
    }

    return NextResponse.redirect(
      new URL(
        "/portal/login",
        request.url
      )
    );
  }

  // =====================================================
  // Prevent Login/Register
  // =====================================================

  if (isPublicPortalPage) {
    return NextResponse.redirect(
      new URL(
        "/portal/dashboard",
        request.url
      )
    );
  }

  // =====================================================
  // Admin / SubAdmin
  // =====================================================

  const {
    data: roleData,
  } = await supabase
    .from("user_roles")
    .select("role, active")
    .eq("id", user.id)
    .maybeSingle();

  if (
    roleData?.active
  ) {
    if (
      roleData.role ===
      "subadmin"
    ) {
      const allowed =
        pathname ===
          "/portal/dashboard" ||
        pathname ===
          "/portal/properties" ||
        pathname.startsWith(
          "/portal/properties/"
        );

      if (!allowed) {
        return NextResponse.redirect(
          new URL(
            "/portal/properties",
            request.url
          )
        );
      }
    }

    return response;
  }

  // =====================================================
  // Public User
  // =====================================================

const {
  data: profile,
  error: profileError,
} = await supabase
  .from("profiles")
  .select("id, user_id, blocked")
  .eq("user_id", user.id)
  .maybeSingle();

console.log("Middleware User:", user.id);
console.log("Middleware Profile:", profile);
console.log("Middleware Error:", profileError);

  if (
    !profile ||
    profile.blocked
  ) {
    await supabase.auth.signOut();

    return NextResponse.redirect(
      new URL(
        "/portal/login",
        request.url
      )
    );
  }

  // =====================================================
  // Public User Restrictions
  // =====================================================

  const allowed =
    pathname ===
      "/portal/dashboard" ||
    pathname ===
      "/portal/properties" ||
    pathname.startsWith(
      "/portal/properties/"
    );

  if (!allowed) {
    return NextResponse.redirect(
      new URL(
        "/portal/properties",
        request.url
      )
    );
  }

  return response;
}

// =====================================================
// Matcher
// =====================================================

export const config = {
  matcher: ["/portal/:path*"],
};