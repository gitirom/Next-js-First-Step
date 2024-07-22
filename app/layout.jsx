import '@styles/globals.css';
import Nav from '@componnents/Nav';    //putting the Nav here for getting see it in all the pages
import Provider from '@componnents/Provider'

export const metadata = {                        //This metadata is useful for search engines, browsers, and social media platforms to understand the content and purpose of the web page.
    title: 'Promptopia',
    description: 'Discover & share AI Prompts'
}

const RootLayout = ({children}) => {
    return (
        <html lang='en' >                                           
            <body>
                <div className='main'>
                    <div className="gradient" />
                </div>

                <main className='app' >
                    <Nav />          
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout
