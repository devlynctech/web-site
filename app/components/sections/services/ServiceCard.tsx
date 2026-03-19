type Props = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

export default function ServiceCard({ title, description, icon }: Props) {
    return (
        <div className="
                relative
                p-8
                border-b border-r border-light-border dark:border-dark-muted
                bg-light dark:bg-dark-subtle
                hover:bg-light-warm dark:hover:bg-dark-mid
                transition
                overflow-hidden
                cursor-pointer
                after:content-['']
                after:absolute
                after:top-0
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-orange
                after:transition-all
                after:duration-500

                hover:after:w-full
            ">
            <div className="w-10 h-10 flex items-center justify-center rounded-icon bg-orange/10 text-orange mb-6">
                {icon}
            </div>

            <h3 className="font-semibold text-text-dark dark:text-offwhite mb-3">
                {title}
            </h3>

            <p className="text-sm text-text-muted dark:text-gray">
                {description}
            </p>

        </div>
    );
}