import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "../_components/ui/card";
import Image from "next/image";
import { Button } from "../_components/ui/button";
import { Badge } from "../_components/ui/badge";
import { StarIcon } from "lucide-react";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-0">
        <div className="px-1 w-full h-[159px] relative">
          <div className="absolute top-3 left-3 z-50">
            <Badge variant="secondary" className="opacity-90 flex gap-1 items-center top-3 left-3">
              <StarIcon size={12}className="fill-primary text-primary" />
              <span className="text-xs">5.0</span>
            </Badge>
          </div>
          <Image 
            alt={barbershop.name} 
            src={barbershop.imageUrl} 
            style={{
              objectFit: "cover",
            }}
            fill
            className="rounded-2xl"
          />
        </div>

        <div className="px-3 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
          <p className=" text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
          <Button className="w-full mt-3" variant="secondary">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default BarbershopItem;