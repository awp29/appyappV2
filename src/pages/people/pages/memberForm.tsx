import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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

interface MemberFormProps {
  defaultValues?: {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    team: string;
    notes: string;
  };
}

export default function MemberForm(props: MemberFormProps) {
  const { defaultValues } = props;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <>
      <Divider className="my-12" />

      <Form
        className="flex flex-col gap-8 max-w-lg"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Input
          {...register("firstName", { required: "This is required" })}
          isRequired
          errorMessage="This is required"
          isInvalid={!!errors.firstName}
          label="First name"
          placeholder="Enter your first name"
        />

        <Input
          {...register("lastName", { required: "This is required" })}
          isRequired
          errorMessage="This is required"
          isInvalid={!!errors.lastName}
          label="Last name"
          placeholder="Enter your last name"
        />

        <Input
          {...register("email", {
            required: "This is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          errorMessage={errors.email?.message as string}
          isInvalid={!!errors.email}
          isRequired
          label="Email"
          placeholder="Enter your email"
        />

        <Select
          {...register("role", { required: "This is required" })}
          errorMessage="This is required"
          isInvalid={!!errors.role}
          isRequired
          className="max-w-xs"
          items={roles}
          label="Role"
          placeholder="Select a role"
        >
          {(role) => <SelectItem>{role.label}</SelectItem>}
        </Select>

        <Select
          {...register("team", { required: "This is required" })}
          errorMessage="This is required"
          isInvalid={!!errors.team}
          isRequired
          className="max-w-xs"
          items={teams}
          label="Team"
          placeholder="Select a team"
        >
          {(team) => <SelectItem>{team.label}</SelectItem>}
        </Select>

        <Textarea
          label="Notes"
          placeholder="Enter your description"
          {...register("notes")}
        />

        <div className="flex gap-4 mt-6">
          <Button className="w-full" color="primary" type="submit">
            Submit
          </Button>
          <Button
            type="reset"
            variant="bordered"
            onPress={() => navigate("/people")}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );
}
