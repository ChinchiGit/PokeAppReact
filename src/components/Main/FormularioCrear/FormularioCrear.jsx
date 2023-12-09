import React from "react";
import { useForm, Controller } from "react-hook-form";


const PokemonForm = ({ onSubmit }) => {
  const { handleSubmit, control, register, setValue, formState: { errors } } = useForm();

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <TextField
        label="ID"
        {...register("id", { required: "ID is required" })}
        error={Boolean(errors.id)}
        helperText={errors.id?.message}
      />
      <TextField
        label="Name"
        {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name should have at least 3 characters" } })}
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
      />
      <TextField
        label="Image"
        {...register("image", { required: "Image is required" })}
        error={Boolean(errors.image)}
        helperText={errors.image?.message}
      />
      <Controller
        render={({ field }) => (
          <Select
            label="Type One"
            {...field}
            error={Boolean(errors.typeOne)}
            helperText={errors.typeOne?.message}
          >
            <MenuItem value="grass">Grass</MenuItem>
            <MenuItem value="fire">Fire</MenuItem>
            {/* Add more types as needed */}
          </Select>
        )}
        control={control}
        name="typeOne"
        rules={{ required: "Type One is required" }}
      />
      <Controller
        render={({ field }) => (
          <Select
            label="Type Two"
            {...field}
            error={Boolean(errors.typeTwo)}
            helperText={errors.typeTwo?.message}
          >
            <MenuItem value="water">Water</MenuItem>
            <MenuItem value="electric">Electric</MenuItem>
            {/* Add more types as needed */}
          </Select>
        )}
        control={control}
        name="typeTwo"
        rules={{ required: "Type Two is required" }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default PokemonForm;
