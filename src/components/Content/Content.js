import * as React from "react";
import Resume from "../Resume/Resume";
import Academic from "../Academic/Academic";
import Work from "../Work/Work";
import Projects from "../Projects/Projects";
import Typography from "@mui/material/Typography";
import Prizes from "../Prizes/Prizes";
import Hobbies from "../Hobbies/Hobbies";
import Contacts from "../Contacts/Contacts";
import image from "../../image.jpg";

function Content() {
  return (
    <div id="start">
      <div
        style={{
          height: "50vh",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255,255,255, 0.50)",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography component="h1" variant="h2" color="primary">
            Bem-Vindo(a)
          </Typography>
        </div>
      </div>

      <Academic></Academic>
      <Work></Work>
      <Projects></Projects>
      <Prizes></Prizes>
      <Hobbies></Hobbies>
      <Resume></Resume>
      <Contacts></Contacts>
    </div>
  );
}

export default Content;
