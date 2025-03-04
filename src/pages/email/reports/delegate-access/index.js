import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippTablePage } from "/src/components/CippComponents/CippTablePage.jsx";

const Page = () => {
  return (
    <CippTablePage
      title="Delegate Access Report"
      apiUrl="/api/ListDelegateAccess"
      simpleColumns={[
        "UPN",
        "PrimarySmtpAddress",
        "Permissions"
      ]}
    />
  );
};

// No actions were specified in the original code, so no actions are added here.
// No off-canvas configuration was provided or specified in the original code.

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
