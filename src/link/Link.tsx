import React from 'react';
import NextLink from 'next/link';

import type { Except, Simplify } from 'type-fest';
import type { LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = Simplify<
  Except<React.ComponentPropsWithoutRef<'a'>, 'href'> &
    Except<NextLinkProps, 'as' | 'passHref'> & {
      /** Only affects external links */
      openInNewTab?: boolean;
      iKnowWhatIAmDoing?: boolean;
    }
>;

function _Link(
  {
    children,
    className,
    href,
    openInNewTab = true,
    iKnowWhatIAmDoing,
    locale,
    prefetch,
    rel,
    replace,
    scroll,
    shallow,
    target,
    ...props
  }: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
): JSX.Element {
  const isExternalLink =!!href && (typeof href === 'string' ? href.startsWith('http') : false);
  const finalTarget = target ?? (isExternalLink && openInNewTab ? '_blank' : undefined);
  const finalRel =rel ?? (finalTarget === '_blank' ? 'noopener noreferrer' : undefined);

  if (
    iKnowWhatIAmDoing !== true &&
    process.env.NODE_ENV !== 'production' &&
    finalTarget === '_blank' &&
    (!finalRel || !hasReverseTabnabbingRel(finalRel))
  ) {
    throw new TypeError(
      `Anchor target of "_blank" must be paired with "rel" attribute of value "noopener noreferrer".`
    );
  }

  return (
    <NextLink
      legacyBehavior
      {...{
        href,
        locale,
        prefetch,
        replace,
        scroll,
        shallow,
      }}
      passHref
    >
      <a
        href="replace"
        className={className}
        target={finalTarget}
        rel={finalRel}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
}

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

export const Link = React.forwardRef(_Link);
