import { Link } from "react-router-dom";

type CustomLinkProps = {
    href: string;
    children: React.ReactNode,
    onClick?: React.MouseEventHandler
};

function hasReverseTabnabbingRel(rel: string): boolean {
    const rels = rel.split(/\s+/);

    let hasNoOpener = false;
    let hasNoReferrer = false;

    for (const r of rels) {
        if (r === 'noopener') {
            hasNoOpener = true;
        } else if (r === 'noreferrer') {
            hasNoReferrer = true;
        }
        if (hasNoOpener && hasNoReferrer) {
            return true;
        }
    }

    return false;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
    href,
    children,
    onClick
}) => {

    const isExternalLink = !!href && (typeof href === 'string' ? href.startsWith('http') : false);
    // const finalTarget = target ?? (isExternalLink && openInNewTab ? '_blank' : undefined);
    // const finalRel = rel ?? (finalTarget === '_blank' ? 'noopener noreferrer' : undefined);

    // if (
    //     process.env.NODE_ENV !== 'production' &&
    //     finalTarget === '_blank' &&
    //     (!finalRel || !hasReverseTabnabbingRel(finalRel))
    // ) {
    //     throw new TypeError(
    //         `Anchor target of "_blank" must be paired with "rel" attribute of value "noopener noreferrer".`
    //     );
    // }
    {/**               <a href="#"
                            className="px-6 py-3 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:no-underline hover:text-blue-200">Link
                            Button
                            </a>**/}

    return (

        isExternalLink ?
            <a href={href} target="_blank" rel="noopener noreferrer" >{children}</a> :
            <Link className="hover:no-underline" to={href} onClick={onClick}>{children}</Link>
    );
};
