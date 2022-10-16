import React from "react";

export interface DefaultMenuProps {
    isOpen: boolean;
    onClose: () => void;
    list: React.ReactNode;
}