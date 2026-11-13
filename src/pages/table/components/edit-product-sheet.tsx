import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '#/components/ui/sheet'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '#/components/ui/field'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '#/components/ui/input'
import type { IProduct } from '#/services/products/type'
import { Button } from '#/components/ui/button'

type Props = {
  product: IProduct
  open: boolean
  onChange: (open: boolean) => void
}

const EditProductSheet = ({ onChange, open, product }: Props) => {
  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      title: product.title,
    },
  })

  return (
    <Sheet open={open} onOpenChange={onChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{product.title}</SheetTitle>
          <SheetDescription>This action cannot be undone.</SheetDescription>
        </SheetHeader>

        <form id="form-rhf-demo">
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Title</FieldLabel>

                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="title"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>

        <SheetFooter className="flex flex-row">
          <Button type="submit" className="w-1/2">
            Save changes
          </Button>

          <SheetClose
            render={
              <Button variant="outline" className="w-1/2">
                Close
              </Button>
            }
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default EditProductSheet
