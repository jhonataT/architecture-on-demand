import './styles.scss';

export const ProjectDescriptionCard = () => {
    return <div className='description-card__container'>
        <h1>Serviços de arquitetura</h1>
        <h5>By Jhonata Tenório</h5>
        <nav>
            <ul>
                <li>
                    Github: <a href='https://github.com/jhonataT/architecture-on-demand' target='__blank'>
                        https://github.com/jhonataT/architecture-on-demand
                    </a>
                </li>
                <li>
                    Linkedin: <a href='https://www.linkedin.com/in/jhonata-tenorio/' target='__blank'>
                        https://www.linkedin.com/in/jhonata-tenorio/
                    </a>
                </li>
            </ul>
        </nav>
    </div>
}