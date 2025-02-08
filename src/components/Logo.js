import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

function Logo(disableLink = false, sx) {
  const logo = (
    <Box sx={{ width: 200, height: 40, ...sx }}>Coding Community</Box>
  );

  if (disableLink) {
    return <>{logo}</>;
  }
  return <RouterLink to="/">{logo}</RouterLink>;
}

export default Logo;
