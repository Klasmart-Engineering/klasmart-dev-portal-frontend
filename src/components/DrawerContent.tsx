import NestedNavList from "./NestedNavList";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Toolbar } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";

export default function DrawerContent () {

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
                categoryText="Subscriptions"
                routeIcon={<DescriptionOutlinedIcon />}
                routeParams={[
                    {
                        id: `subscriptions-root`,
                        path: `/subscriptions`,
                        displayName: `Root`,
                    },
                    {
                        id: `subscriptions-more`,
                        path: `/subscriptions/more`,
                        displayName: `More`,
                    },
                ]}
            />
        </div>
    );
}
