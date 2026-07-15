import { getSettings } from "@/lib/repositories/settingsRepository";
import SettingsForm from "@/components/portal/settings/SettingsForm";

export default async function SettingsPage() {
  const settings = await getSettings();

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Website Settings
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Manage your website settings.
        </p>
      </div>

      <SettingsForm
        initialData={settings}
      />
    </div>
  );
}