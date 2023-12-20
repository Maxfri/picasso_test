import { ReactNode, useCallback, useRef } from "react";
import styles from "./VirtualList.module.scss";
import { useFixedSizeList } from "../../../../shared/lib/hooks";

type VirtualListProps<T> = {
  classNames?: string;
  items: T[];
  children: (item: T, index: number) => ReactNode;
};

const itemHeight = 40;
const containerHeight = 600;

export const VirtualList = <T extends object>({
  items,
  children,
}: VirtualListProps<T>) => {
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const { virtualItems, totalListHeight, isScrolling } = useFixedSizeList({
    itemsCount: items.length,
    itemHeight,
    listHeight: containerHeight,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  });

  return (
    <div
      ref={scrollElementRef}
      className={styles.list}
      style={{
        height: containerHeight,
      }}
    >
      <div
        className={styles.container}
        style={{
          height: totalListHeight,
        }}
      >
        {virtualItems?.map((virtualItem, index) => {
          const item = items[virtualItem.index];
          return (
            <div
              key={`virtualItem-${index}`}
              className={styles.item}
              style={{
                transform: `translateY(${virtualItem.offsetTop}px)`,
                height: itemHeight,
              }}
            >
              {isScrolling ? "Scrolling..." : children(item, index)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
