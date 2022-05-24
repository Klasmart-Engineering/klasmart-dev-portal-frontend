import NestedNavList from "./NestedNavList";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Toolbar } from "@mui/material";
import Image,
{ ImageLoaderProps } from 'next/image';
import Link from "next/link";

export default function DrawerContent () {

    const imageLoader = (resolverProps: ImageLoaderProps) => {
        return `https://kidsloop.net/${resolverProps.src}`;
    };

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
                            loader={imageLoader}
                            src="wp-content/uploads/2021/08/kidsloop.svg"
                            alt="kidsloop logo"
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
