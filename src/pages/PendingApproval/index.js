import {
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  DialogContent,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import moment from "moment";
import DialogBox from "../../components/DialogBox/DialogBox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import mockPendingApproval from "../../_mock/pendingApproval.json";

const PendingApproval = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pendingList, setPendingList] = useState([]);
  const [open, setOpen] = useState(false);
  const [approvalAction, setapprovalAction] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPendingList(mockPendingApproval.content);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleReject = () => {
    setOpen(true);
    setapprovalAction("reject");
  };
  const handleApprove = () => {
    setOpen(true);
    setapprovalAction("approval");
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit">
      DashBoard
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Pending Approval
    </Link>,
  ];

  const getStatus = {
    PENDINGMERCHANTSUBMISSION: "Pending Merchant Submission",
    REVIEWINPROGRESS: "Review in Progress",
    PENDINGAPPROVAL: "Pending Approval",
  };

  const dialogContent = {
    approval: (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckCircleIcon color="success" fontSize="large" />
        </Box>

        <DialogContent>Merchant on Boarded successful</DialogContent>
      </>
    ),
    reject: (
      <>
        <DialogContent>
          Please state the reasons for rejection.
          <TextField
            id="outlined-multiline-static"
            label="Rejection Explaination"
            multiline
            rows={4}
            autoFocus
            placeholder="Type your reasons here..."
            fullWidth
            sx={{ mt: "1.5rem" }}
          />
          <Box
            py={1.5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="contained">Send</Button>
          </Box>
        </DialogContent>
      </>
    ),
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
        <Typography variant="h4" py={4}>
          Pending Approval
        </Typography>
      </Box>
      <Box>
        <Paper sx={{ pt: "0.5rem" }}>
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Store Name</TableCell>
                  <TableCell>Created On</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Approval</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingList.length > 0 ? (
                  pendingList.map((item) => (
                    <TableRow key={item.merchantId}>
                      <TableCell>{item.storeName.name}</TableCell>
                      <TableCell>
                        {moment(item.created).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>{getStatus[item.merchantStatus]}</TableCell>
                      <TableCell sx={{ display: "flex", gap: "0.6rem" }}>
                        <Button
                          variant="contained"
                          disabled={
                            item.merchantStatus === "REVIEWINPROGRESS" ||
                            item.merchantStatus === "PENDINGMERCHANTSUBMISSION"
                          }
                          onClick={handleReject}
                        >
                          Reject
                        </Button>
                        <Button
                          variant="contained"
                          disabled={
                            item.merchantStatus === "REVIEWINPROGRESS" ||
                            item.merchantStatus === "PENDINGMERCHANTSUBMISSION"
                          }
                          onClick={handleApprove}
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
                {pendingList.length > 0 && (
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    count={pendingList.length}
                    rowsPerPage={1}
                    page={1}
                    onPageChange={() => {}}
                  />
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      <DialogBox
        open={open}
        setOpen={setOpen}
        title={
          approvalAction === "reject"
            ? "Reasons for Rejection"
            : "Approval Status"
        }
      >
        {dialogContent[approvalAction]}
      </DialogBox>
    </Stack>
  );
};

export default PendingApproval;
