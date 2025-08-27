'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigationData } from '@/lib/constants';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen }: NavigationProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navigationData.map((item) => (
        <div key={item.label} className="relative group">
          {item.children ? (
            <div>
              <button
                onClick={() => handleDropdownToggle(item.label)}
                className={`flex items-center space-x-1 px-3 py-2 text-white hover:text-blue-200 transition-colors ${
                  isActive(item.href) ? 'text-blue-200' : ''
                }`}
              >
                <span>{item.label}</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              
              {/* Desktop Dropdown */}
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                        isActive(child.href) ? 'bg-blue-50 text-blue-600' : ''
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              href={item.href}
              className={`px-3 py-2 text-white hover:text-blue-200 transition-colors ${
                isActive(item.href) ? 'text-blue-200' : ''
              }`}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
