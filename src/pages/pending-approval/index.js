import {
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import mockPendingApproval from "../../_mock/pendingApproval.json";

const PendingApproval = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pendingList, setPendingList] = useState([]);

  const merchant = {
    merchantId: 1356321,
    category: "BEAUTY",
    storeName: {
      name: "Lotte",
      lang: {
        en: {
          name: "Lotte",
          address: "Terminal 2 Changi Airport",
        },
        zh: {
          name: "Lotte",
          address: "local address",
        },
      },
    },
    createdOn: "2023-05-12",
    logo: "Lotte",
    companyName: "Lotte Pte Ltd",
    companyAddress: "101 Aria Street. Singapore 602580",
    businessRegistrationNumber: "UEN number",
    accountManager: "Geraldine Ho",
    gstAbsorptionNonTraveller: false,
    gstAbsorptionTraveller: false,
    dutyFreeTenant: false,
    jewelTenant: false,
    shippingFeeToCAG: true,
    merchantType: "BEAUTY",
    suspendedAccount: false,
    merchantStatus: "PENDING",
    merchantStores: [
      {
        storeNumber: "1",
        mainStore: true,
        lmsTenantID: "442573",
        lmsTenantFolder: "/lotte",
        address: "101 Aria Street. Singapore 602580",
        postalCode: 522002,
      },
    ],
    merchantContactList: [
      {
        name: "Lotte user 1",
        contactNumber: "12347890",
        faxNumber: "abcd",
        email: "Lotte@Changiairport.com",
        contactType: "Mobile",
      },
    ],
    merchantBankDetails: {
      applicationReferenceNumber: "01234567890",
      bankCode: "7171",
      branchCode: "081",
      accountName: "Lotte LTEDA",
      accountNumber: "03272373173",
      bankName: "POSB",
      swiftCode: "0327",
      financeApprovedstatus: true,
      gstRegisteredEntity: true,
      gstNumber: "111222333444",
      payment2c2pSubMID: "138210-2393mdhd",
      liqidMID: "138210-2393mdhd",
      renatalDeptCode: "138210-2393mdhd",
      foreignBankAccount: false,
    },
    fulfilmentModes: ["ARRIVAL", "NONTRAVELLER"],
    merchantTenancies: [
      {
        tenantAgreementReference: "01234567890",
        tenancyStartDate: "2023-05-19",
        tenancyEndDate: "2024-05-18",
        concessionaireCode: "0123457890",
        suspensionDate: null,
        suspendedBy: null,
        suspensionReason: null,
      },
    ],
    minSpendForFreeDelivery: 50.0,
    deliveryFee: 50.0,
    shipmentType: "DROPSHIP",
    publicHolidaysApplicable: false,
    pickupSlotStartTime: null,
    dcaFile: null,
    ddaFile: null,
    dcaFileStatus: null,
    ddaFileStatus: null,
    pickupSlotEndTime: null,
    dropshipType: "MERCHANT3PL",
    departureOrderLeadTime: 7,
    deliveryModeNonTimeSlot: 7,
    deliverySLA: "MERCHANT3PL",
    nonOperatingHours: [
      {
        startDay: "MONDAY",
        startTime: "22:00:00",
        endDay: "SUNDAY",
        endTime: "09:00:00",
        orderLeadTime: 7,
        nonOperatingConfigured: true,
      },
    ],
    leaseInfoStatus: "APPROVED",
    financeStatus: "APPROVED",
    logisticsStatus: "APPROVED",
    warehouse: {
      pickupSlotStartTime: "09:00:00",
      pickupSlotEndTime: "21:00:00",
      address1: null,
      address2: null,
      address3: null,
      arrival: false,
      departure: false,
      landside: false,
    },
    businessInfoStatus: "PENDING",
  };

  useEffect(() => {
    setIsLoading(true);
    console.log("Hello Reloading");
    setTimeout(() => {
      let arr = [];
      arr.push(merchant);
      setPendingList(arr);
      setIsLoading(false);
    }, 5000);
  }, []);

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" fontSize="small">
      DashBoard
    </Link>,
    <Link underline="hover" key="2" color="inherit" fontSize="small">
      Pending Approval
    </Link>,
  ];

  const getStatus = (
    merchantStatus,
    leaseInfoStatus,
    financeStatus,
    logisticsStatus,
    businessInfoStatus
  ) => {
    if (
      merchantStatus === "APPROVED" ||
      leaseInfoStatus === "APPROVED" ||
      financeStatus === "APPROVED" ||
      logisticsStatus === "APPROVED" ||
      businessInfoStatus === "APPROVED"
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Stack>
      <Box>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Typography variant="h3" pb={2}>
          Pending Approval
        </Typography>
      </Box>
      <Box>
        <Paper sx={{ pt: "0.5rem" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: '#000'}}>Store Name</TableCell>
                  <TableCell sx={{ color: '#000'}}>Created On</TableCell>
                  <TableCell sx={{ color: '#000'}}>Status</TableCell>
                  <TableCell sx={{ color: '#000'}}>Approval</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockPendingApproval.length > 0 ? (
                  mockPendingApproval.map((item) => (
                    <TableRow key={item.merchantId}>
                      <TableCell sx={{ fontWeight: 700,}}>{item.storeName.name}</TableCell>
                      <TableCell>{item.createdOn}</TableCell>
                      <TableCell sx={{ color: '#b88f00'}}>
                        {getStatus(
                          item.merchantStatus,
                          item.leaseInfoStatus,
                          item.financeStatus,
                          item.logisticsStatus,
                          item.businessInfoStatus
                        )
                          ? "Pending Approval"
                          : "Approved" }
                      </TableCell>
                      <TableCell sx={{ display: "flex", gap: "0.6rem" }}>
                        <Button
                          variant="contained" color="error"
                          disabled={
                            !getStatus(
                              item.merchantStatus,
                              item.leaseInfoStatus,
                              item.financeStatus,
                              item.logisticsStatus,
                              item.businessInfoStatus
                            )
                          }
                        >
                          Reject
                        </Button>
                        <Button
                          variant="contained" color="success"
                          disabled={
                            !getStatus(
                            item.merchantStatus,
                            item.leaseInfoStatus,
                            item.financeStatus,
                            item.logisticsStatus,
                            item.businessInfoStatus
                          )}
                        >
                          Approve
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow sx={{ height: "30rem" }}>
                    {isLoading ? (
                      <TableCell colSpan={4} align="center">
                        <CircularProgress />
                      </TableCell>
                    ) : (
                      <TableCell
                        colSpan={4}
                        sx={{ height: "30rem" }}
                        align="center"
                      >
                        No records found.
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
              {pendingList.length > 0 && (
                <TablePagination
                  rowsPerPageOptions={[5, 10, 20]}
                  count={pendingList.length}
                  rowsPerPage={1}
                  page={1}
                  onPageChange={() => {}}
                />
              )}
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Stack>
  );
};

export default PendingApproval;
