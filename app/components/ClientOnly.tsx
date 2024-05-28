import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

type Props = {
    children(): ReactNode;
};

const ClientOnly = ({ children }: Props) => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(function hydrate() {
        setHydrated(true);
    }, []);

    return hydrated ? <>{children()}</> : <></>;
};

export default ClientOnly;
