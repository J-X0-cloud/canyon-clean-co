import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar-in">
        <p>
          <Icon name="pin" />
          <span className="tb-long">{site.serviceAreaLong}</span>
          <span className="tb-short">{site.serviceAreaShort}</span>
        </p>
        <p className="topbar-hours">
          <Icon name="clock" />
          {site.hours}
        </p>
      </div>
    </div>
  );
}
