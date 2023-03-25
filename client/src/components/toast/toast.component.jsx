import { Toast, ToastContainer } from "react-bootstrap";
import { SnackbarContext } from "../../contexts/snackbar-context";
import { useContext } from "react";

const ToastMessage = (props) => {
  const { isSnbOpen, setIsSnbOpen } = useContext(SnackbarContext);
  const { msg } = props;
  return (
    <ToastContainer position="top-end">
      <Toast
        show={isSnbOpen}
        autohide="true"
        delay="4000"
        onClose={() => setIsSnbOpen(false)}
      >
        <Toast.Header>Alert!</Toast.Header>
        <Toast.Body>{msg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
export default ToastMessage;
