import PageHeader from "@/components/page/pageHeader";
import DefaultLayout from "@/layouts/default";

export default function SettingsPage() {
  return (
    <DefaultLayout>
      <PageHeader>
        <div>
          <PageHeader.Title>Settings</PageHeader.Title>
          <PageHeader.Description>
            Coming soon, probably...🤷‍♂️
          </PageHeader.Description>
        </div>
      </PageHeader>
    </DefaultLayout>
  );
}
