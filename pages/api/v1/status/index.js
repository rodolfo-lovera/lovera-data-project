function status(request, response) {
  response.status(200).json({ chave: "Valor de conseguir" });
}

export default status;
