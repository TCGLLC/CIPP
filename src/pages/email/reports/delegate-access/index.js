import { Layout as DashboardLayout } from "../../../../layouts/index.js";
import { CippFixedTablePage } from "../../../../components/CippComponents/CippFixedTablePage.jsx";

const Page = () => {
  return (
    <CippFixedTablePage
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
