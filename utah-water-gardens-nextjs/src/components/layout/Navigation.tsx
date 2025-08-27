'use client';

import  from ''next/navigation';
import  from ''@/lib/constants';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function Navigation({ isMobileMenuOpen: _isMobileMenuOpen, setIsMobileMenuOpen }: NavigationProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === ''/';
    }
    return pathname.startsWith(href);
  };

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const _closeMobileMenu = () => {
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
                  isActive(item.href) ? '' : ''bg-blue-50 text-blue-600'''
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
                isActive(item.href) ? '' : &apos;'
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
