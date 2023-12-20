import { Suspense, useCallback } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import { routeConfig } from "../../../../shared/config";
import { PageLoader } from "../../../../widgets/PageLoader";

export const AppRouter = () => {
  const renderWithWrapper = useCallback(({ element, path }: RouteProps) => {
    const page = <Suspense fallback={<PageLoader />}>{element}</Suspense>;

    return <Route key={path} path={path} element={page} />;
  }, []);
  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
