import { ReactNode } from 'react';
import MyMantineProvider from './MyMantineProvider';
import MyReactQueryProvider from './MyReactQueryProvider';

export default function Provider({ children }: { children?: ReactNode }) {
    return (
        <MyReactQueryProvider>
            <MyMantineProvider>
                {children}
            </MyMantineProvider>
        </MyReactQueryProvider>
    )
}
