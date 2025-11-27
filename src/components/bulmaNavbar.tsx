import type { EntryCollection } from "contentful";
import React, { useState } from 'react';
import { siteMetadata } from "../data/siteMetadata.js";
import type { DropdownMenu, Page } from "../lib/contentful.ts";

interface Props { pages: EntryCollection<Page>, dropdownMenus: EntryCollection<DropdownMenu> }

const BulmaNavbar= ({pages, dropdownMenus}: Props) => {
  const [isBurgerActive, setIsBurgerActive ] = useState(false);

  return (
    <nav className="navbar is-link is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item is-size-3 is-size-4-mobile" href={'/index'}>
          {siteMetadata.author}
        </a>
        <a role="button" className={`navbar-burger burger ${ isBurgerActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false"
          onClick={() => setIsBurgerActive(!isBurgerActive)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" className={`navbar-menu ${ isBurgerActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
          {pages.items
            .map(page => {
              const node = page.fields;
              const name = node.name.toString();
              const slug = node.slug === "/"
                  ? '/index'
                  : `/${node.slug}`

              return (
                  <a key={name} className="navbar-item is-size-5" href={slug}
                        onClick={() => setIsBurgerActive(!isBurgerActive)}>
                    {name}
                  </a>
              )
            })}

          {dropdownMenus.items
            .map(menu => {
              const node = menu.fields;
              const title = node.title.toString();
              const childPages = Array.isArray(node.childPages)
                ? node.childPages
                  .filter((page) => page !== undefined)
                  .filter(page => "fields" in page)
                : [];

              return (
                <div key={title} className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link is-size-5">
                    {title}
                  </div>

                  <div className="navbar-dropdown">
                    {childPages.map(page => {
                        const name = page.fields.name.toString();
                        const slug = page.fields.slug.toString();

                        return (
                          <a key={name} className="navbar-item is-size-5" href={`/${slug}`} onClick={() => setIsBurgerActive(!isBurgerActive)}>
                            {name}
                          </a>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })}
          <div className={'navbar-item'}>{'   '}</div>
        </div>
      </div>
    </nav>
  )
}

export default BulmaNavbar;
