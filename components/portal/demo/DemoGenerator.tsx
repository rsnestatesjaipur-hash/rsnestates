"use client";

import {
  useMemo,
  useState,
  useTransition,
} from "react";

import { toast } from "sonner";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { generateDemoListings } from "@/app/actions/demo-generator-actions";

export default function DemoGenerator() {
  const [isPending, startTransition] =
    useTransition();

  const [count, setCount] =
    useState(10);

  const [apartments, setApartments] =
    useState(true);

  const [villas, setVillas] =
    useState(true);

  const [plots, setPlots] =
    useState(true);

  const [commercial, setCommercial] =
    useState(true);

  const [localityId, setLocalityId] =
    useState(0);

  const estimatedTotal =
    useMemo(() => {
      let subTypes = 0;

      if (apartments) subTypes += 7;

      if (villas) subTypes += 6;

      if (plots) subTypes += 7;

      if (commercial) subTypes += 7;

      return subTypes * count;
    }, [
      apartments,
      villas,
      plots,
      commercial,
      count,
    ]);

  function handleGenerate() {
    startTransition(async () => {
      const result =
        await generateDemoListings(
        count,
        localityId === 0
          ? undefined
          : localityId
      );

      if (!result.success) {
        toast.error(
          result.message ??
            "Generation failed."
        );
        return;
      }

      toast.success(
        `${result.count} demo listings generated successfully.`
      );
    });
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Demo Property Generator
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Generate realistic demo properties for
          RSN Estates.
        </p>
      </div>

      <Card className="space-y-8 p-8">
<>
  <div>
    <label className="mb-2 block font-semibold">
      Listings Per Sub-Type
    </label>

    <Input
      type="number"
      min={1}
      max={100}
      value={count}
      onChange={(e) =>
        setCount(
          Number(e.target.value)
        )
      }
    />
  </div>

  <div>
    <label className="mb-2 block font-semibold">
      Generate For Locality
    </label>

    <select
      value={localityId}
      onChange={(e) =>
        setLocalityId(
          Number(e.target.value)
        )
      }
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
    >
      <option value={0}>
        All Localities
      </option>

      <option value={1}>
        Jagatpura
      </option>

      <option value={2}>
        Vaishali Nagar
      </option>

      <option value={3}>
        Mansarovar
      </option>

      <option value={4}>
        Malviya Nagar
      </option>

      <option value={5}>
        Pratap Nagar
      </option>

      <option value={6}>
        Ajmer Road
      </option>

      <option value={7}>
        Sirsi Road
      </option>

      <option value={8}>
        Kalwar Road
      </option>

      <option value={9}>
        Tonk Road
      </option>
    </select>
  </div>
</>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={apartments}
              onChange={(e) =>
                setApartments(
                  e.target.checked
                )
              }
            />
            Apartments
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={villas}
              onChange={(e) =>
                setVillas(
                  e.target.checked
                )
              }
            />
            Villas
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={plots}
              onChange={(e) =>
                setPlots(
                  e.target.checked
                )
              }
            />
            Plots
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={commercial}
              onChange={(e) =>
                setCommercial(
                  e.target.checked
                )
              }
            />
            Commercial
          </label>
        </div>

        <div className="rounded-xl bg-slate-100 p-6 dark:bg-slate-800">
          <p className="text-sm uppercase tracking-widest text-slate-500">
            Estimated Listings
          </p>

          <p className="mt-2 text-4xl font-bold text-blue-600">
            {estimatedTotal}
          </p>
        </div>

        <Button
          onClick={handleGenerate}
          disabled={isPending}
        >
          {isPending
            ? "Generating..."
            : "Generate Demo Listings"}
        </Button>
      </Card>
    </div>
  );
}