import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  width: number;
  height: number;
}

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {items.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer overflow-hidden rounded-lg bg-secondary"
            onClick={() => setSelectedItem(item)}
            style={{
              gridColumn: item.width > item.height ? "span 2" : "span 1",
            }}
          >
            <div className="relative aspect-square md:aspect-auto overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover gallery-image"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="p-4">
              <h3 className="font-sans font-semibold text-foreground text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Visualização */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-background">
          {selectedItem && (
            <div className="flex flex-col">
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="p-6">
                <h2 className="text-3xl font-sans font-bold text-foreground">
                  {selectedItem.title}
                </h2>
                <p className="text-muted-foreground mt-2">
                  {selectedItem.category}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
