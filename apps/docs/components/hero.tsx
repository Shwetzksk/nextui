import {useState, useEffect} from "react";
import {
  Button,
  Input,
  Tooltip,
  Image,
  CardFooter,
  Card,
  CardBody,
  Switch,
  Spinner,
  Pagination,
  Tabs,
  TabItem,
} from "@nextui-org/react";
import {ArrowRightIcon, MoonFilledIcon, SunFilledIcon} from "@nextui-org/shared-icons";
import {useTheme} from "next-themes";
import dynamic from "next/dynamic";

import {NextUILogo} from "@/components";
import {GithubIcon} from "@/components/icons";
import {UserTwitterCard} from "@/components/demos";

const DynamicLopperBG = dynamic(() => import("./looper-bg").then((mod) => mod.LooperBg), {
  ssr: true,
});

const FloatingComponents: React.FC = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  const isSelected = theme === "dark" && mounted;

  useEffect(() => {
    setMounted(true);
  }, []);

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="flex flex-col gap-4">
      <Switch
        classNames={{
          base: "relative top-[80px] left-[240px] animate-[levitate_13s_ease_infinite_1s_reverse]",
          wrapper: "shadow-sm",
          startIcon: "text-white",
        }}
        endIcon={<MoonFilledIcon />}
        isSelected={isSelected}
        size="xl"
        startIcon={<SunFilledIcon />}
        onChange={onChange}
      />

      <Input
        className="relative top-[140px] left-[240px] animate-[levitate_10s_ease_infinite] w-[200px]"
        color="secondary"
        defaultValue="NextUI"
        label="Input"
        labelPosition="outside"
        radius="xl"
        variant="bordered"
        onClear={() => {}}
      />

      <Card
        isFooterBlurred
        className="relative top-[-40px] left-[80px] h-[120px] animate-[levitate_12s_ease_infinite_1s] z-0 max-w-fit"
        radius="2xl"
      >
        <Image
          className="object-cover -translate-y-6 h-[120%]"
          src="/images/card-example-6.jpeg"
          width={120}
        />
        <CardFooter className="before:bg-black/10 before:border before:border-white/20 overflow-hidden justify-between py-2 absolute before:rounded-xl rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-lg ml-1 z-10">
          <p className="text-xs font-semibold text-white/80">Camera</p>
          <p className="text-xs font-semibold text-white/80">$525</p>
        </CardFooter>
      </Card>

      <Tabs
        aria-label="Floating tabs example"
        className="relative -left-[144px] top-[-80px] animate-[levitate_17s_ease_infinite_1s]"
        classNames={{
          tabList: "max-w-[200px] bg-content1 shadow-sm",
        }}
        radius="full"
        size="xs"
      >
        <TabItem key="notes" title="Notes" />
        <TabItem key="tasks" title="Tasks" />
        <TabItem key="files" title="Files" />
      </Tabs>

      <UserTwitterCard className="relative -left-[240px] top-[-80px] animate-[levitate_16s_ease_infinite] border-none" />

      <Card className="relative left-[90px] -top-[220px] animate-[levitate_18s_ease_infinite] right-8 shadow-lg z-10 max-w-fit border-none">
        <CardBody>
          <NextUILogo small size={60} />
        </CardBody>
      </Card>

      <div className="relative z-10 -top-[310px] -right-[200px] animate-[levitate_14s_ease_infinite_1s]">
        <Pagination
          isCompact
          showControls
          showShadow
          classNames={{
            base: "shadow-sm rounded-xl",
            item: "bg-background dark:bg-content1",
            prev: "bg-background dark:bg-content1",
            next: "bg-background dark:bg-content1",
          }}
          initialPage={6}
          total={10}
        />
      </div>

      <Tooltip
        isOpen
        showArrow
        className="text-sm animate-[levitate_14s_ease_infinite]"
        color="secondary"
        content="Developers love Next.js"
        placement="top"
      >
        <Button
          className="relative -left-[120px] -top-[180px] max-w-fit animate-[levitate_14s_ease_infinite_0.5s]"
          color="secondary"
          size="sm"
          variant="flat"
        >
          Tooltip
        </Button>
      </Tooltip>

      <Card className="relative left-[220px] -top-[320px] animate-[levitate_16s_ease_infinite] right-8 shadow-lg z-10 max-w-fit border-none">
        <CardBody>
          <Spinner color="secondary" size="xl" />
        </CardBody>
      </Card>

      <Card
        isFooterBlurred
        className="relative left-10 -top-[380px] animate-[levitate_12s_ease_infinite_1s] z-0 max-w-fit"
        radius="2xl"
      >
        <Image className="object-cover" height={200} src="/images/hero-card.jpeg" width={200} />
        <CardFooter className="before:bg-white/10 overflow-hidden justify-between py-2 absolute before:rounded-xl rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-lg ml-1 z-10">
          <p className="text-xs text-white/80">Available soon.</p>
          <Button color="secondary" radius="full" size="xs" variant="flat">
            Notify me
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="flex relative  w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] max-h-[800px]">
      <div className="flex flex-col gap-6 w-1/2">
        <div>
          <h1 className="text-5xl tracking-tight inline font-semibold">Make&nbsp;</h1>
          <h1 className="text-5xl tracking-tight inline font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]">
            beautiful&nbsp;
          </h1>
          <h1 className="text-5xl tracking-tight inline font-semibold">
            websites regardless of your design experience.
          </h1>
        </div>
        <h4 className="text-xl font-light text-neutral-500">
          Beautiful, fast and modern React UI library.
        </h4>
        <div className="flex items-center gap-4">
          <Button
            color="primary"
            endIcon={
              <ArrowRightIcon
                className="group-data-[hover=true]:translate-x-0.5 transition-transform"
                strokeWidth={2}
              />
            }
            radius="full"
            size="lg"
          >
            Get Started
          </Button>
          <Button radius="full" size="lg" startIcon={<GithubIcon />} variant="bordered">
            Github
          </Button>
        </div>
      </div>
      <div className="relative h-full">
        <FloatingComponents />
      </div>
      <DynamicLopperBG className="absolute -top-1/2 -z-50" />
    </section>
  );
};
