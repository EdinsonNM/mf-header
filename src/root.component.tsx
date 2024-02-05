import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import useLanguage from "./hooks/use-language";
import { useTranslation } from "react-i18next";

export default function Root(props) {
  const { changeLanguage, language } = useLanguage();
  const { t } = useTranslation();
  useEffect(() => {
    changeLanguage(language);
  }, []);
  return (
    <AppBar position="fixed" elevation={0} color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DEMO MICROFRONTEND
        </Typography>
        <Button
          color="inherit"
          onClick={() => changeLanguage(language === "es" ? "en" : "es")}
        >
          {t("language")}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
