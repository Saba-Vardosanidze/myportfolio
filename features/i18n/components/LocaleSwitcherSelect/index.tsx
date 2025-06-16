"use client";
import {Locale, routing, usePathname, useRouter} from "@/features/i18n/routing";
import {useParams} from "next/navigation";

type Props = {
  defaultValue: string;
  label: string;
};

const LocaleSwitcherSelect = ({defaultValue, label}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.replace(
      // @ts-expect-error: Ensures known params and pathname combination
      {pathname, params},
      {locale: nextLocale as Locale}
    );
  }

  return (
    <select
      defaultValue={defaultValue}
      onChange={onSelectChange}
      aria-label={label}
      className="bg-transparent px-2 py-1 border rounded text-sm"
    >
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LocaleSwitcherSelect;
