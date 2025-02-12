import PageHeader from "@/components/page/pageHeader";
import DefaultLayout from "@/layouts/default";

export default function HelpPage() {
  return (
    <DefaultLayout>
      <PageHeader>
        <div>
          <PageHeader.Title>Help</PageHeader.Title>
          <PageHeader.Description>
            Coming soon, probably...🤷‍♂️
          </PageHeader.Description>
        </div>
      </PageHeader>
    </DefaultLayout>
  );
}
