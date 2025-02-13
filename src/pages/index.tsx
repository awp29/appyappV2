import PageHeader from "@/components/page/pageHeader";
import DefaultLayout from "@/layouts/default";

export default function DashbaordPage() {
  return (
    <DefaultLayout>
      <PageHeader>
        <div>
          <PageHeader.Title>Dashboard</PageHeader.Title>
          <PageHeader.Description>
            Coming soon, probably... 🚧
          </PageHeader.Description>
        </div>
      </PageHeader>
    </DefaultLayout>
  );
}
