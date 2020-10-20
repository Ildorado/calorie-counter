import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import data from "../../../../assets/Food_Display_Table.json";
import { FoodDataKeys } from "../../../../types";
import RestoreIcon from "@material-ui/icons/Restore";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { unfocusFoodData } from "../../../../redux/actions";
import { useDispatch } from "react-redux";
import { staticColors } from "../../../../constants/colors";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h2: {
      color: theme.palette.text.primary,
      marginRight: "25px",
      textAlign: "end",
      [theme.breakpoints.down("xs")]: {
        textAlign: "start",
      },
    },
    iconButton: {
      fontSize: "40px",
    },

    foodElementData: {
      whiteSpace: "pre-line",
      marginTop: "1.5em",
      padding: "20px 20px 20px 20px",
      [theme.breakpoints.down("xs")]: {
        padding: "20px 5px 20px 5px",
      },
      width: "max-content",
      backgroundColor: theme.palette.secondary.main,
      color: staticColors.white,
      borderRadius: "10px",
      fontWeight: "bolder",
    },
    amountInput: {
      color: staticColors.white,
    },
    amountInputRoot: {
      height: "min-content",
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "10px",
      color: staticColors.white,
    },
    iconButtonContainer: {
      position: "absolute",
      marginTop: "1em",
      [theme.breakpoints.down("xs")]: {
        right: 0,
      },
    },
    delimiter: {
      height: 3,
      marginBottom: "20px",
    },
    consumed: {
      display: "flex",
      flexDirection: "row",
      borderRadius: "10px",
    },
    consumedElement: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.secondary.main,
      width: "250px",
      height: "100px",
    },
    consumedElementTitle: {
      fontWeight: "bolder",
      margin: 0,
      color: staticColors.white,
    },
    consumedElementInfo: {
      fontWeight: "bold",
      margin: 0,
      color: staticColors.white,
    },
  })
);

interface Props {
  id: FoodDataKeys;
}
const FoodDataSection = ({ id }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [amountValue, setAmountValue] = useState(1);
  const focusedFoodDataElement = data[id];
  const handleIconButtonClick = () => {
    dispatch(unfocusFoodData());
  };

  return (
    <Grid container>
      <div className={classes.iconButtonContainer}>
        <IconButton
          className={classes.iconButton}
          aria-label="go back"
          onClick={handleIconButtonClick}
        >
          <RestoreIcon className={classes.iconButton} />
        </IconButton>
      </div>
      <Grid item sm={3} xs={12}>
        <h2 className={classes.h2}>
          Your <br />
          Food
        </h2>
      </Grid>
      <Grid item sm={9} xs={12}>
        <p className={classes.foodElementData}>
          {` ${focusedFoodDataElement.Display_Name}
              ${Number(
                focusedFoodDataElement?.Calories
              ).toFixed()} calories | Serving Size: ${Number(
            focusedFoodDataElement?.Portion_Amount
          )} ${focusedFoodDataElement?.Portion_Display_Name}`}
        </p>
      </Grid>

      <Grid item sm={3} xs={12}>
        <h2 className={classes.h2}>Amount</h2>
      </Grid>
      <Grid item sm={9} xs={12}>
        <TextField
          id="outlined-number"
          type="number"
          value={amountValue}
          classes={{
            root: classes.amountInputRoot,
          }}
          onChange={(e) => {
            if (Number(e.target.value) >= 0) {
              setAmountValue(Number(e.target.value));
            }
          }}
          inputProps={{
            className: classes.amountInput,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item sm={12}>
        <Divider light className={classes.delimiter} />
      </Grid>
      <Grid item sm={3} xs={12}>
        <h2 className={classes.h2}>
          You've <br />
          Consumed
        </h2>
      </Grid>
      <Grid item sm={9} xs={12}>
        <div className={classes.consumed}>
          <div className={classes.consumedElement}>
            <p className={classes.consumedElementTitle}>Calories</p>
            <p className={classes.consumedElementInfo}>{`${
              Number(Number(focusedFoodDataElement?.Calories).toFixed()) *
              amountValue
            }`}</p>
          </div>
          <div className={classes.consumedElement}>
            <p className={classes.consumedElementTitle}>Fat</p>
            <p className={classes.consumedElementInfo}>
              {`${
                Number(
                  (
                    Number(focusedFoodDataElement?.Solid_Fats) +
                    Number(focusedFoodDataElement?.Saturated_Fats)
                  ).toFixed()
                ) * amountValue
              }`}
              G
            </p>
          </div>
          <div className={classes.consumedElement}>
            <p className={classes.consumedElementTitle}>Carbs</p>
            <p className={classes.consumedElementInfo}>
              {`${
                Number(Number(focusedFoodDataElement?.Added_Sugars).toFixed()) *
                amountValue
              }`}
              G
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default FoodDataSection;
