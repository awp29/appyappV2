import PageHeader from "@/components/page/pageHeader";
import DefaultLayout from "@/layouts/default";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { NavLink } from "react-router-dom";
import MemberForm from "../memberForm";

export default function AddMemberPage() {
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
          <BreadcrumbItem>Add</BreadcrumbItem>
        </Breadcrumbs>

        <div>
          <PageHeader.Title>Add member</PageHeader.Title>
          <PageHeader.Description>
            Fill out a form, add a member to your team. Why not?!
          </PageHeader.Description>
        </div>
      </PageHeader>

      <MemberForm />
    </DefaultLayout>
  );
}
