import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home, Login } from "./views";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Login message="Bienvenido a Flow Weather" buttonText="Ingresar" />
		),
	},
	{
		path: "/home",
		element: <Home />,
	},
]);

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(<RouterProvider router={router} />);
