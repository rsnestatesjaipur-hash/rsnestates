import LocalityForm from "@/components/portal/localities/form/LocalityForm";

export default function NewLocalityPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Add Locality
        </h1>

        <p className="mt-2 text-slate-500">
          Create a new locality.
        </p>
      </div>

      <LocalityForm />
    </div>
  );
}