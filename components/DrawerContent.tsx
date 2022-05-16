import NestedNavList from "./NestedNavList";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Toolbar } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";
import {
    NAV_ROUTES,
    RouteType,
} from "utils/nav-routes";

export default function DrawerContent () {

    const specRoutes = NAV_ROUTES.filter((routeContext) => routeContext.type === RouteType.SPECS)[0].routes;
    const docRoutes = NAV_ROUTES.filter((routeContext) => routeContext.type === RouteType.DOCS)[0].routes;

    return (
        <div>
            <Toolbar
                color="primary"
                style={{
                    padding: `1rem`,
                }}
            >
                <Link href="/">
                    <a>
                        <Image
                            src="https://kidsloop.net/wp-content/uploads/2021/08/kidsloop.svg"
                            alt="Vercel Logo"
                            width={150}
                            height={50}

                        />
                    </a>
                </Link>
            </Toolbar>
            <NestedNavList
                categoryText="Specifications"
                routeIcon={<DescriptionOutlinedIcon />}
                routeParams={specRoutes}
            />
            <NestedNavList
                categoryText="Docs"
                routeIcon={<ArticleOutlinedIcon />}
                routeParams={docRoutes}
            />
        </div>
    );
}
