import UserRow from "@/components/portal/users/UserRow";

import { getAllUsers } from "@/lib/repositories/users/userRepository";

// =====================================================
// Users Page
// =====================================================

export default async function UsersPage() {
  const users =
    await getAllUsers();

  return (
    <div className="space-y-6">
      {/* ============================================
          Header
      ============================================ */}

      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Users
        </h2>

        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Manage property owners and sub-admin accounts.
        </p>
      </div>

      {/* ============================================
          Users Table
      ============================================ */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <table className="min-w-full">
          <thead className="border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-6 py-4 text-left">
                Name
              </th>

              <th className="px-6 py-4 text-left">
                Type
              </th>

              <th className="px-6 py-4 text-left">
                Email
              </th>

              <th className="px-6 py-4 text-center">
                Active
              </th>

              <th className="px-6 py-4 text-center">
                Can Feature
              </th>

              <th className="px-6 py-4 text-center">
                Properties
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}