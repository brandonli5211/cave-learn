'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export const NAV_BAR_HEIGHT = 64

const NAV_ITEMS = [
  { href: '/', label: 'Home', exact: true as const },
  { href: '/diagram', label: 'Diagram', matchDiagram: true as const },
  { href: '/exercise', label: 'Test Yourself' },
] as const

function isNavItemActive(
  href: string,
  exact: boolean | undefined,
  matchDiagram: boolean | undefined,
  pathname: string,
): boolean {
  if (exact) {
    return pathname === href
  }

  if (matchDiagram) {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const navLinks = NAV_ITEMS.map(({ href, label, ...item }) => {
    const isActive = isNavItemActive(
      href,
      'exact' in item ? item.exact : false,
      'matchDiagram' in item ? item.matchDiagram : false,
      pathname,
    )

    return (
      <Link
        key={href}
        href={href}
        className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    )
  })

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <Link href="/" className={styles.logo} aria-label="Home">
        <Image
          src="/logo_dark.svg"
          alt=""
          width={36}
          height={36}
          className={styles.logoImage}
          priority
        />
        <span className={styles.logoText}>CAVE</span>
        <span className={`badge badge--pink ${styles.learnBadge}`}>LEARN</span>
      </Link>

      <div className={styles.links}>{navLinks}</div>

      <button
        type="button"
        className={styles.menuButton}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span
          className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ''}`}
          aria-hidden
        >
          <span />
          <span />
          <span />
        </span>
      </button>

      {menuOpen && (
        <>
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div id="navbar-menu" className={styles.menuPanel}>
            {navLinks}
          </div>
        </>
      )}
    </nav>
  )
}
