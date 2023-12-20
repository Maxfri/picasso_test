import React from "react";
import { Button } from "../../../../shared/ui/Button/Button";

import { useNavigate } from "react-router-dom";

export const ButtonNavigateToBack = React.memo(() => {
  const navigate = useNavigate();
  const handleNavigateToBack = () => navigate(-1);

  return <Button onClick={handleNavigateToBack}>Назад</Button>;
});
