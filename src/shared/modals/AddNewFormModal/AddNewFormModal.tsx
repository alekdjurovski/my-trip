import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@material-ui/core";

const AddNewFormDialog: React.FC<any> = ({ newPlace }) => {
  const [open, setOpen] = React.useState(false);

  const state = {
    location: "",
    placeName: "",
    cardTitle: "",
    cardDescription: "",
    img: "",
    username: " ",
    date: "",
  };
  const [stateForm, setStateForm] = React.useState(state);

  const handleClickOpen = (props: any) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = () => {
    setOpen(false);
  };

  const submitForm = () => {
    newPlace(stateForm);
    setStateForm(state);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add New Place
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> Add New Place</DialogTitle>

        <DialogContent>
          <form>
            <div className={"d-flex flex-column"}>
              <div>
                <TextField
                  label="Location"
                  name="location"
                  required={true}
                  value={stateForm.location}
                  onChange={(e) =>
                    setStateForm({ ...stateForm, location: e.target.value })
                  }
                />
              </div>
              <div>
                <TextField
                  label="Place Name"
                  name="placeName"
                  required={true}
                  value={stateForm.placeName}
                  onChange={(e) =>
                    setStateForm({ ...stateForm, placeName: e.target.value })
                  }
                />
              </div>
              <div>
                <TextField
                  label="Card Title"
                  name="cardTitle"
                  required={true}
                  value={stateForm.cardTitle}
                  onChange={(e) =>
                    setStateForm({ ...stateForm, cardTitle: e.target.value })
                  }
                />
              </div>
              <div>
                <TextField
                  label="Card Description"
                  name="cardDescription"
                  required={true}
                  value={stateForm.cardDescription}
                  onChange={(e) =>
                    setStateForm({
                      ...stateForm,
                      cardDescription: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <TextField
                  label="Image"
                  name="img"
                  required={true}
                  value={stateForm.img}
                  onChange={(e) =>
                    setStateForm({ ...stateForm, img: e.target.value })
                  }
                />
              </div>
              <div>
                <TextField
                  label="Username"
                  name="username"
                  required={true}
                  value={stateForm.username}
                  onChange={(e) =>
                    setStateForm({ ...stateForm, username: e.target.value })
                  }
                />
              </div>
              <div>
                <TextField
                  label="Date"
                  name="date"
                  required={true}
                  value={stateForm.date}
                  onChange={(e) =>
                    setStateForm({ ...stateForm, date: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={submitForm} color="secondary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddNewFormDialog;
