import PageHeader from "@/components/page/pageHeader";
import DefaultLayout from "@/layouts/default";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { NavLink } from "react-router-dom";
import MemberForm from "../memberForm";

export default function EditMemberPage() {
  return (
    <DefaultLayout>
      <PageHeader withBreadcrumbs>
        <Breadcrumbs>
          <BreadcrumbItem>
            <NavLink to="/">Dashboard</NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NavLink to="/people">People</NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem>Edit</BreadcrumbItem>
        </Breadcrumbs>

        <div>
          <PageHeader.Title>Edit member</PageHeader.Title>
          <PageHeader.Description>
            Edit you team member, get them up to date
          </PageHeader.Description>
        </div>
      </PageHeader>

      <MemberForm
        defaultValues={{
          firstName: "Alice",
          lastName: "Smith",
          email: "alice.smith@appyapp.com",
          role: "designer",
          team: "comet",
          notes: "Alice smith notes!!!!!",
        }}
      />
    </DefaultLayout>
  );
}
