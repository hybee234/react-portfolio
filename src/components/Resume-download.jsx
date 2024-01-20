import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function ResumeDownload() {

    return (
        <div className="bg-filter mt-10 flex flex-wrap justify-center max-w-48 m-auto">
            <p className="w-full"> Download my resume:</p>            
            <Link to="https://www.google.com" target="_blank" className="text-4xl w-full link">
                <Icon icon="ion:download-outline" className="m-auto "/>                                                        
            </Link>
        </div>
    )
}