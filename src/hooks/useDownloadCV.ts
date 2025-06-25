import { useLocale } from "next-intl";
import { PDF_URLS } from "../const/pdf_url";

function isMobile() {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 768;
}

export const useDownloadCV = () => {
    const locale = useLocale();

    const getCVUrl = (): string => {
        const lang = locale === "en" ? "en" : "es";
        const isMobileDevice = isMobile();
        return isMobileDevice ? PDF_URLS.mobile[lang] : PDF_URLS.desktop[lang];
    };

    const downloadCV = () => {
        const url = getCVUrl();
        const link = document.createElement("a");
        link.href = url;
        link.download = url.split("/").pop() || "cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return {
        downloadCV,
    };
};
