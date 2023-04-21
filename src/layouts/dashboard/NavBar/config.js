import MerchantManagementIcon from "../../../assets/Icons/MerchantManagementIcon.svg";
import ProductIcon from "../../../assets/Icons/ProductIcon.svg";
import OrderIcon from "../../../assets/Icons/OrderIcon.svg";
import MarketingCentreIcon from "../../../assets/Icons/MarketingCentreIcon.svg";
import FeedbackIcon from "../../../assets/Icons/FeedbackIcon.svg";
import DataInsghtsIcon from "../../../assets/Icons/DataInsightsIcon.svg";
import FinanceIcon from "../../../assets/Icons/FinanceIcon.svg";
import LearningHubIcon from "../../../assets/Icons/LearningHubIcon.svg";
import AdministrationIcon from "../../../assets/Icons/AdministrationIcon.svg";
import MyAccountIcon from "../../../assets/Icons/MyAccountIcon.svg";
import HelpIcon from "../../../assets/Icons/HelpIcon.svg";

const navConfig = [
  {
    title: "Merchant Management",
    icon: () => (
      <img src={MerchantManagementIcon} alt="Merchant Management Icon" />
    ),
    nestedItems: [
      {
        title: "All Merchants",
        to: "merchant-list",
      },
      {
        title: "Pending Approval",
        to: "pending-approval",
      },
    ],
  },
  {
    title: "Products",
    icon: () => <img src={ProductIcon} alt="Product Icon" />,
    nestedItems: [
      {
        title: "Some Tab",
        to: "something1",
      },
      {
        title: "Some Tab",
        to: "something2",
      },
    ],
  },
  {
    title: "Orders",
    icon: () => <img src={OrderIcon} alt="Order Icon" />,
  },
  {
    title: "Marketing Centre",
    icon: () => <img src={MarketingCentreIcon} alt="Marketing Centre" />,
  },
  {
    title: "Customer Service",
    icon: () => <img src={FeedbackIcon} alt="Feedback Icon" />,
  },
  {
    title: "Data Insights",
    icon: () => <img src={DataInsghtsIcon} alt="Data Insghts Icon" />,
  },
  {
    title: "Finance",
    icon: () => <img src={FinanceIcon} alt="Finance Icon" />,
  },
  {
    title: "Learning Hub",
    icon: () => <img src={LearningHubIcon} alt="Learning Hub Icon" />,
  },
  {
    title: "Administration",
    icon: () => <img src={AdministrationIcon} alt="Administration Icon" />,
  },
  {
    title: "My Account",
    icon: () => <img src={MyAccountIcon} alt="My Account Icon" />,
  },
  {
    title: "Help",
    icon: () => <img src={HelpIcon} alt="Help Icon" />,
  },
];

export default navConfig;
