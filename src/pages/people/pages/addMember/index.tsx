import PageHeader from "@/components/page/pageHeader";
import DefaultLayout from "@/layouts/default";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { NavLink } from "react-router-dom";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";

const roles = [
  { key: "customerSupport", label: "Customer Support" },
  { key: "dataScientist", label: "Data Scientist" },
  { key: "designer", label: "Designer" },
  { key: "devOpsEngineer", label: "Dev Ops Engineer" },
  { key: "hRManager", label: "HR Manager" },
  { key: "marketingSpecialist", label: "Marketing Specialist" },
  { key: "productManager", label: "Product Manager" },
  { key: "qAEngineer", label: "QA Engineer" },
  { key: "SalesRepresentative", label: "Sales Representative" },
  { key: "softwareEngineer", label: "Software Engineer" },
];

const teams = [
  { key: "astro", label: "Astro" },
  { key: "comet", label: "Comet" },
  { key: "galaxy", label: "Galaxy" },
  { key: "nebula", label: "Nebula" },
  { key: "rocket", label: "Rocket" },
];

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

      <div className="max-w-xl ">
        <p className="text-default-500">
          Required fields are marked with an asterisk *
        </p>

        <Divider className="mt-2 mb-8" />

        <Form
          className="flex flex-col gap-6"
          onSubmit={() => {
            console.log("submit");
          }}
        >
          <Input
            isRequired
            // errorMessage={({ validationDetails }) => {
            //   if (validationDetails.valueMissing) {
            //     return "Please enter your name";
            //   }

            //   return errors.name;
            // }}
            label="First name"
            labelPlacement="outside"
            name="firstName"
            placeholder="Enter your first name"
          />

          <Input
            isRequired
            // errorMessage={({ validationDetails }) => {
            //   if (validationDetails.valueMissing) {
            //     return "Please enter your name";
            //   }

            //   return errors.name;
            // }}
            label="Last name"
            labelPlacement="outside"
            name="lastName"
            placeholder="Enter your last name"
          />

          <Input
            isRequired
            // errorMessage={({ validationDetails }) => {
            //   if (validationDetails.valueMissing) {
            //     return "Please enter your name";
            //   }

            //   return errors.name;
            // }}
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
          />

          <Select
            isRequired
            className="max-w-xs"
            items={roles}
            label="Role"
            labelPlacement="outside"
            placeholder="Select a role"
          >
            {(role) => <SelectItem>{role.label}</SelectItem>}
          </Select>

          <Select
            isRequired
            className="max-w-xs"
            items={teams}
            label="Team"
            labelPlacement="outside"
            placeholder="Select a team"
          >
            {(team) => <SelectItem>{team.label}</SelectItem>}
          </Select>

          <Textarea
            label="Notes"
            labelPlacement="outside"
            placeholder="Enter your description"
          />

          <div className="flex gap-4 mt-6">
            <Button className="w-full" color="primary" type="submit">
              Submit
            </Button>
            <Button type="reset" variant="bordered">
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </DefaultLayout>
  );
}
