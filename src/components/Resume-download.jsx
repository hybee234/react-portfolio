import { Icon } from '@iconify/react';

export default function ResumeDownload() {

    return (
        <div className="bg-filter mt-10 flex flex-wrap justify-center max-w-48 m-auto">
            <p className="w-full"> Download my resume:</p>            
            
            {/* {Use anchor element to fetch file from server rather than JS} */}
            <a href="./assets/files/20240121 Hy Lim - Resume.pdf" download="20240121 Hy Lim - Resume.pdf" className="text-4xl w-full link">
                <Icon icon="ion:download-outline" className="m-auto "/>
            </a>

        </div>
    )
}