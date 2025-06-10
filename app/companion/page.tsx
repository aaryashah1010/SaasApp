import CompanionCard from "@/components/ui/CompanionCard";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { SearchParams } from "@/types";
import SearchInput from "@/components/ui/SearchInput";
import SubjectFilter from "@/components/ui/SubjectFilter";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const resolvedSearchParams = await searchParams;
  const subject = typeof resolvedSearchParams.subject === 'string' ? resolvedSearchParams.subject : '';
  const topic = typeof resolvedSearchParams.topic === 'string' ? resolvedSearchParams.topic : '';

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main className="p-4">
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1 className="text-2xl font-semibold">Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

      <section className="companions-grid mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id || companion.$id}
            id={companion.id || companion.$id}
            name={companion.name}
            topic={companion.topic}
            subject={companion.subject}
            duration={companion.duration}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  )
}

export default CompanionsLibrary
